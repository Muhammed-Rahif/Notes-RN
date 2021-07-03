import React, { createContext, useState } from "react";

export const ViewNoteIdContext = createContext({});

function contexts({ children }) {
  const [viewNoteId, setViewNoteId] = useState();

  return (
    <ViewNoteIdContext.Provider value={{ viewNoteId, setViewNoteId }}>
      {children}
    </ViewNoteIdContext.Provider>
  );
}

export default contexts;
