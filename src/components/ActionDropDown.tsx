"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { actionsDropdownItems } from "../../constants";
import { constructDownloadUrl } from "@/lib/utils";

import { Models } from "node-appwrite";

import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { renameFile, updateFileUsers } from "@/lib/actions/file.actions";
import { usePathname } from "next/navigation";
import { FileDetails, Share } from "./ActionsModalContent";

const ActionDropDown = ({ file }: { file: Models.Document }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [action, setAction] = useState<ActionType | null>(null);
  const [name, setName] = useState(file.name);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emails, setEmails] = useState<string[]>([]);

  const path = usePathname();

  const closeAllModals = () => {
    setIsModalOpen(false);
    setIsDropDownOpen(false);
    setAction(null);
    setName(file.name);
    // setEmails([])
  };

  const handleAction = async () => {
    if (!action) return;

    setIsLoading(true);

    let success = false;

    const actions = {
      rename: () =>
        renameFile({ fileId: file.$id, name, extension: file.extension, path }),
      share: () => updateFileUsers({ fileId: file.$id, emails, path }),
      delete: () => console.log("delete"),
    };
    success = await actions[action.value as keyof typeof actions]();

    if (success) closeAllModals();
    setIsLoading(false);
  };

  const handleRemoveUser = async (email: string) => {
    const updatedEmails = emails.filter((e) => e !== email);

    const success = await updateFileUsers({
      fileId: file.$id,
      emails: updatedEmails,
      path,
    });
    if (success) setEmails(updatedEmails);
    closeAllModals();
  };

  const renderDialogContent = () => {
    if (!action) return null;

    const { value, label } = action;
    return (
      <DialogContent className="shad-dialog button">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle className="text-center text-light-100">
            {label}
          </DialogTitle>
          {value === "rename" && (
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          )}
          {value === "details" && <FileDetails file={file} />}
          {value === "share" && (
            <Share
              file={file}
              onInputChange={setEmails}
              onRemove={handleRemoveUser}
            />
          )}
          {/* {value === 'delete' &&} */}
        </DialogHeader>
        (['rename', 'delete','share'].includes(value) && (
        <DialogFooter className="flex flex-col gap-3 md:flex-row">
          <Button onClick={closeAllModals} className="modal-cancel-button">
            Cancel
          </Button>
          <Button onClick={handleAction} className="modal-submit-button">
            <p className="capitalize">{value}</p>
            {isLoading && (
              <Image
                src="/assets/icon/Loader.svg"
                alt="loader"
                className="animate-spin"
                width={24}
                height={24}
              />
            )}
          </Button>
        </DialogFooter>
        ))
      </DialogContent>
    );
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DropdownMenu open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
        <DropdownMenuTrigger className="shad-no-focus">
          <Image
            src="/assets/icons/dots.svg"
            alt="dot"
            width={34}
            height={34}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="max-w-[200px] truncate">
            {file.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {actionsDropdownItems.map((actionItem) => (
            <DropdownMenuItem
              key={actionItem.value}
              className="shad-dropdown-item"
              onClick={() => {
                setAction(actionItem);
                if (
                  ["rename", "share", "delete", "details"].includes(
                    actionItem.value
                  )
                ) {
                  setIsModalOpen(true);
                }
              }}
            >
              {actionItem.value === "download" ? (
                <Link
                  href={constructDownloadUrl(file.buckedFileId)}
                  download={file.name}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={actionItem.icon}
                    alt={actionItem.label}
                    width={30}
                    height={30}
                  />
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Image
                    src={actionItem.icon}
                    alt={actionItem.label}
                    width={30}
                    height={30}
                  />
                </div>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {renderDialogContent()}
    </Dialog>
  );
};

export default ActionDropDown;
