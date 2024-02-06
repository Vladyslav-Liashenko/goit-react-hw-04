export const LoadMoreBtn = ({ handleLoadMore, totalPages, page }) => {
  return (
    <div>
      {totalPages >= page && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};
