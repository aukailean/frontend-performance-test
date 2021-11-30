import { useState, useEffect, useReducer, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Checkbox } from "components/Checkbox/Checkbox";
import { Pagination } from "components/Pagination/Pagination";
import {
  StyledTable,
  TableHead,
  ColumnHeaderCell,
  TableBody,
  TableCell,
  TableContainer,
  TableOverflowContainer,
  TableStylingContainer,
} from "./Table.styles";
import { Loader } from "components/Loader/Loader";

type TableData = {
  date: string;
  good: string;
  in_reserve: string;
  location: string;
  lot: string;
  number_in_storage: number;
  out_of_stock: number;
  pick_in_progress: number;
  robot_inventory: number;
  shipper: string;
};

const fetchTableData = async (page: number) => {
  const response = await fetch(`/api/table?page=${page}`);
  return await response.json();
};

interface ToggleAction {
  type: "toggle";
  page: number;
  id: number;
}

interface AllToggleAction {
  type: "alltoggle";
  page: number;
  data: TableData[];
}
const selectedReducer = (
  state: {
    [page: number]: {
      [id: number]: boolean;
    };
  },
  action: ToggleAction | AllToggleAction
) => {
  switch (action.type) {
    case "toggle":
      const newSelectedState = !state[action.page]?.[action.id];

      return {
        ...state,
        [action.page]: { ...state[action.page], [action.id]: newSelectedState },
      };

    case "alltoggle":
      const selectedValues = Object.values(state[action.page] || {});
      const selectedValuesFilled = selectedValues.length === action.data.length;
      const uncheckedValueFound = selectedValues.some((checked) => !checked);

      const allToggleValue = selectedValuesFilled && !uncheckedValueFound;

      return {
        ...state,
        [action.page]: Object.fromEntries(
          action.data.map((_, index) => [index, !allToggleValue])
        ),
      };
  }
};

export const Table = () => {
  const [page, setPage] = useState(0);

  const [selected, setSelected] = useReducer(selectedReducer, {});

  const queryClient = useQueryClient();
  const {
    data: tableData,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery<{
    lastPage: boolean;
    offset: number;
    pages: number;
    data: TableData[];
  }>(["table_data", page], () => fetchTableData(page), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!tableData?.lastPage) {
      queryClient.prefetchQuery(["table_data", page + 1], () =>
        fetchTableData(page + 1)
      );
    }
  });

  const allToggleChecked = useMemo(() => {
    if (!selected[page] || !tableData) return false;

    const selectedValues = Object.values(selected[page]);
    if (selectedValues.length !== tableData.data.length) return false;

    return selectedValues.every((checked) => checked);
  }, [page, selected, tableData]);

  if (isLoading) {
    //TODO: a css/styled prop for every element for dynamic tailwind is probably needed instead of styled components for everything
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Loader />
      </div>
    );
  }
  if (!tableData && !isFetching) {
    return <h1>no data</h1>;
  }

  return (
    <>
      <TableOverflowContainer>
        <TableStylingContainer>
          <TableContainer>
            <StyledTable>
              <TableHead>
                <tr>
                  <ColumnHeaderCell scope="col">
                    <Checkbox
                      onClick={() => {
                        if (tableData?.data) {
                          setSelected({
                            type: "alltoggle",
                            page: page,
                            data: tableData?.data,
                          });
                        }
                      }}
                      checked={allToggleChecked}
                    />
                  </ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">更新日</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">荷主</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">商品</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">ロケ</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">ロット</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">ロボット在庫</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">格納中数</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">引当中数</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">PICK中数</ColumnHeaderCell>
                  <ColumnHeaderCell scope="col">欠品数</ColumnHeaderCell>
                </tr>
              </TableHead>
              <TableBody isPreviousData={isPreviousData}>
                {tableData?.data?.map((data, index) => {
                  return (
                    <tr key={`${data.date}${data.shipper}`}>
                      <TableCell>
                        <Checkbox
                          onClick={() => {
                            setSelected({
                              type: "toggle",
                              page,
                              id: index,
                            });
                          }}
                          checked={selected?.[page]?.[index]}
                        />
                      </TableCell>
                      <TableCell>{data.date}</TableCell>
                      <TableCell>{data.shipper}</TableCell>
                      <TableCell>{data.good}</TableCell>
                      <TableCell>{data.location}</TableCell>
                      <TableCell>{data.lot}</TableCell>
                      <TableCell>{data.robot_inventory}</TableCell>
                      <TableCell>{data.in_reserve}</TableCell>
                      <TableCell>{data.number_in_storage}</TableCell>
                      <TableCell>{data.pick_in_progress}</TableCell>
                      <TableCell>{data.out_of_stock}</TableCell>
                    </tr>
                  );
                })}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </TableStylingContainer>
      </TableOverflowContainer>
      <div style={{ margin: "10px 0" }}>
        <Pagination
          disabled={isPreviousData}
          totalPages={tableData?.pages || 0}
          currentPage={page}
          onNextClick={() => {
            if (!isPreviousData) {
              setPage(page + 1);
            }
          }}
          onPreviousClick={() => {
            if (!isPreviousData) {
              setPage(page - 1);
            }
          }}
          onPageClick={(page) => {
            if (!isPreviousData) {
              setPage(page);
            }
          }}
        ></Pagination>
      </div>
    </>
  );
};
