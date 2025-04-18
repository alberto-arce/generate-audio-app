import { styled } from '@mui/system';
import {
  Container,
  Typography,
  Button,
  LinearProgress,
  FormControl,
  TextField,
  Box,
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
  textAlign: 'center',
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

export const ButtonRow = styled('div')({
  display: 'flex',
  gap: '16px',
  marginBottom: '16px',
  width: '100%',
});

export const AudioButton = styled('a')({
  flex: 1,
  display: 'flex',
  textDecoration: 'none',
});

export const AudioSection = styled(Box)({
  marginTop: '30px',
  padding: '20px',
  background: '#f0f4fa',
  borderRadius: '10px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const AudioTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: '1.1rem',
  marginBottom: '10px',
  color: '#444',
});
