import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import BookmarksModal from "./BookmarksModal";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksModal ref={popoverRef} />}
    </section>
  );
}
