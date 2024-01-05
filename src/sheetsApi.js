import { fetchGoogleSheetsData } from 'google-sheets-mapper';

export const getSheet = async ( sheetName ) => {
   try {
     return await fetchGoogleSheetsData({
       apiKey: process.env.REACT_APP_SHEETS_API_KEY,
       sheetId: process.env.REACT_APP_SHEET_ID,
       sheetsOptions: [{ id: sheetName }],
     });
   } catch (error) {
     console.error(error);
     throw error; // Rethrow the error to handle it in the component
   }
 };