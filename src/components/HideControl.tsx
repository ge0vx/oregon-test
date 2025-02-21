import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { EyeSlashIcon } from "@heroicons/react/24/solid";

export const HideControl = ({ isHiden, toggleHide }) => {
  function test() {
    toggleHide();
  }

  return (
    <button
      className="icon-displayed rounded-lg bg-gray-500 border-gray-200 border"
      onClick={test}
    >
      {isHiden ? (
        <EyeSlashIcon className="size-5 text-white-500" />
      ) : (
        <EyeIcon className="size-5 text-white-500" />
      )}
    </button>
  );
};
