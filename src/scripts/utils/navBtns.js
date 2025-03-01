// Global buttons functionality
import { exportTable } from "../actions/export.js";
import { globalBtns } from "../arrays/Elements.js";

export function navButtons(){
    exportPDF();
}

function exportPDF(){
    if(globalBtns.exportBtn){
        globalBtns.exportBtn.addEventListener('click', () => {
            exportTable();
        })
    }
}