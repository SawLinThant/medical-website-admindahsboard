import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { cn } from "@/lib/utils";
  
  interface PaginationProps {
    totalPages: number; 
    currentPage: number; 
    onPageChange: (page: number) => void; 
  }
  
  export function PaginationControll({ totalPages, currentPage, onPageChange }: PaginationProps) {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
  
    const handlePageClick = (page: number) => {
      if (page !== currentPage) {
        onPageChange(page);
      }
    };
  
    const handlePrevious = () => {
      if (!isFirstPage) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (!isLastPage) {
        onPageChange(currentPage + 1);
      }
    };
  
    const renderPageNumbers = () => {
      const pages = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
  
      return pages;
    };
  
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
              isActive={isFirstPage}
              className={cn("",{
                "cursor-not-allowed border-none text-muted-foreground hover:bg-transparent hover:text-muted-foreground":isFirstPage
              })}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            //  isActive={isLastPage}
              className={cn("",{
                "cursor-not-allowed border-none text-muted-foreground hover:bg-transparent hover:text-muted-foreground":isLastPage
              })}
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  