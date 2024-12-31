import { styled } from '@mui/system';
import {
  Container,
  Typography,
  Button,
  LinearProgress,
  FormControl,
  TextField,
} from '@mui/material';

export const FormContainer = styled(Container)({
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  padding: '30px',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  marginTop: '50px',
});

export const Title = styled(Typography)({
  fontWeight: '600',
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#333',
  textAlign: 'center', // Centrado
});

export const SubTitle = styled(Typography)({
  fontSize: '0.875rem',
  marginBottom: '15px',
  color: '#777',
});

export const StyledButton = styled(Button)({
  padding: '10px 20px',
  fontWeight: 'bold',
  borderRadius: '25px',
  textTransform: 'none',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  },
});

export const ProgressBar = styled(LinearProgress)({
  marginTop: '20px',
  borderRadius: '10px',
});

export const FormControlStyled = styled(FormControl)({
  marginBottom: '20px',
});

export const StyledTextField = styled(TextField)({
  marginTop: '20px',
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
});
