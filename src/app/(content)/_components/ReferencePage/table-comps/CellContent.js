import React from "react";
import CellText from "./CellText";
import CellList from "./CellList";
import CellCode from "./CellCode";
import CellTable from "./CellTable";

export default function CellContent({cell, rowId}) {
    return (
        <React.Fragment>
            {('text' in cell) ? (
                <React.Fragment>
                    <CellText cell={cell}/>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {('list' in cell) ? (
                        <CellList cell={cell} rowId={rowId}/>
                    ) : (
                        <React.Fragment>
                            {('code' in cell) ? (
                                <React.Fragment>
                                    <CellCode cell={cell}/>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {('table' in cell) ? (
                                        <React.Fragment>
                                            <CellTable cell={cell} rowId={rowId}/>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                        
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    );
}