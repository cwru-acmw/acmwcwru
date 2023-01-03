import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

//how to inherit all properties of MUI button
const MyButton = styled(Button)(() => ({

}));

//how to change certain things
//to use: import { RoundedButton } from './styles/MyButton'
export const RoundedButton = styled(MyButton)(() => ({
   borderRadius: '23px'
}));

export default MyButton; 