import { forwardRef } from "react";
import { createPortal } from "react-dom";

const BookmarksModal = forwardRef<HTMLDivElement>(function (_, ref) {
  return createPortal(
    <div ref={ref} className="bookmarks-modal">
      TEST
    </div>,
    document.body
  );
});

export default BookmarksModal;
