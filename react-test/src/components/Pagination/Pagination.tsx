import {
  PaginationContainer,
  BackButton,
  PageButton,
  NextButton,
  SVGIcon,
} from "./Pagination.styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
  onPreviousClick: () => void;
  onNextClick: () => void;
  disabled?: boolean;
}
export const Pagination = ({
  totalPages,
  currentPage,
  onPageClick,
  onPreviousClick,
  onNextClick,
  disabled = false,
}: PaginationProps) => {
  return (
    <PaginationContainer disabled={disabled}>
      <BackButton disabled={currentPage === 0} onClick={onPreviousClick}>
        <SVGIcon
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </SVGIcon>
      </BackButton>
      {Array.from(Array(totalPages)).map((_, i) => {
        return (
          <PageButton
            isCurrentPage={i === currentPage}
            onClick={() => {
              onPageClick(i);
            }}
            aria-current="page"
          >
            {i + 1}
          </PageButton>
        );
      })}

      <NextButton
        disabled={currentPage + 1 === totalPages}
        onClick={onNextClick}
      >
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </SVGIcon>
      </NextButton>
    </PaginationContainer>
  );
};
