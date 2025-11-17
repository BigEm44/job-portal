export default function SortingControls() {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton>Relevant</SortingButton>
      <SortingButton>Recent</SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
};

function SortingButton({ children }: SortingButtonProps) {
  return (
    <button className={`sorting__button sorting__button--recent `}>
      {children}
    </button>
  );
}
