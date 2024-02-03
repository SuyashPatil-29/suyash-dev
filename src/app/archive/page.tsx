"use client";
import BlogNoEffectCard from "@/components/BlogNoEffectCard";
import { Input } from "@/components/ui/input";
import { allBlogs, Blog } from "contentlayer/generated";
import React, { useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EmptyAlert } from "@/components/EmptyAlert";

const BlogsPerPage = 3;

const ArchivePage = () => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[] | undefined>(
    allBlogs?.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setCurrentPage(1); // Reset to the first page when searching
    setFilteredBlogs(
      allBlogs?.filter((blog: Blog) =>
        blog.title.toLowerCase().includes(value)
      )?.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    );
  };

  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
  const currentBlogs = filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = useMemo(() => Math.ceil((filteredBlogs?.length as number) / BlogsPerPage), [
    filteredBlogs,
  ]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPaginationItems = () => {
    const displayedPages = 3;

    if (totalPages <= 1) {
      return null; // Do not render pagination if there's only one page
    }

    if (totalPages <= displayedPages) {
      // Display all pages if there are 4 or fewer pages
      return Array.from({ length: totalPages }).map((_, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            onClick={() => paginate(index + 1)}
            isActive={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ));
    } else {
      // Display ellipsis and adjust visible page numbers dynamically
      const halfDisplayed = Math.floor(displayedPages / 2);
      const startPage = Math.max(currentPage - halfDisplayed, 1);
      const endPage = Math.min(currentPage + halfDisplayed, totalPages);

      const pagesToShow = Array.from({ length: endPage - startPage + 1 }).map(
        (_, index) => startPage + index
      );

      let paginationItems: React.ReactNode[] = [];
      if (startPage > 1) {
        paginationItems.push(
          <PaginationItem key={1}>
            <PaginationLink onClick={() => paginate(1)}>1</PaginationLink>
          </PaginationItem>
        );
        if (startPage > 2) {
          paginationItems.push(
            <PaginationItem key="ellipsis-start">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }
      }

      paginationItems = paginationItems.concat(
        pagesToShow.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => paginate(pageNumber)}
              isActive={pageNumber === currentPage}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))
      );

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          paginationItems.push(
            <PaginationItem key="ellipsis-end">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }
        paginationItems.push(
          <PaginationItem key={totalPages}>
            <PaginationLink onClick={() => paginate(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }

      return paginationItems;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow md:min-h-[67vh] min-h-[80vh]">
        <Input
          type="text"
          className="py-6 bg-[rgb(41,41,47)] rounded-xl text-white font-semibold"
          placeholder="Search for blogs..."
          onChange={handleSearchInput}
        />

        {filteredBlogs && filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:pt-4 pt-8">
            {currentBlogs?.map((blog: Blog) => (
              <BlogNoEffectCard
                key={blog._id}
                title={blog.title}
                description={blog.description as string}
                href={`archive/${blog.slugAsParams}`}
                date={blog.date}
              />
            ))}
          </div>
        ) : (
          <EmptyAlert />
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 mb-4 self-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.max(prevPage - 1, 1)
                    )
                  }
                />
              </PaginationItem>
              {renderPaginationItems()}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(
                        prevPage + 1,
                        Math.ceil((filteredBlogs?.length as number) / BlogsPerPage)
                      )
                    )
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ArchivePage;
