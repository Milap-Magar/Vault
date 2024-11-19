import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import React from "react";

const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  const files = await getFiles();
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block">Sort by:</p>
            <Sort />

            {/* dynamic routing */}
            {files.total > 0 ? (
              <section className="file-list" file={file}>
                {files.documents.map((file: Models.Document) => (
                  <Card key={file.$id} />
                ))}
              </section>
            ) : (
              <p className="empty-list">No files uploaded</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
