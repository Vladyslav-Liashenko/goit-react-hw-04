export const LoadMoreBtn = ({ handleLoadMore, showButton, noMorePages }) => {
  return (
    <div>
      {showButton && !noMorePages && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};