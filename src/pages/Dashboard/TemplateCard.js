import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 285,
  border: '2px solid #d3d3d3',
  borderRadius: '8px',
  '&:hover': {
    border: '2px solid #6200ea',
  },
}));

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const ApprovedChip = styled(Chip)({
  backgroundColor: '#e0ffe0',
  color: '#4caf50',
});

const SelectedButton = styled(Button)({
  backgroundColor: '#6200ea',
  color: '#ffffff',
  position: 'absolute',
  right: '10px',
  bottom: '10px',
});

const SelectButton = styled(Button)({
  borderColor: '#6200ea',
  color: '#6200ea',
  position: 'absolute',
  right: '10px',
  bottom: '10px',
});

const TemplateCard = ({ image, title, status, category, description, date, selected }) => {
  return (
    <StyledCard style={{ position: 'relative' }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <ApprovedChip label={status} />
        </Grid>
        <Typography variant="subtitle2" color="textSecondary" style={{ marginTop: '5px' }}>{category}</Typography>
        <StyledMedia
          image={image}
          title={title}
        />
        <Typography variant="body2" component="p" style={{ marginTop: '10px' }}>
          {description}
        </Typography>
        <Typography variant="caption" color="textSecondary" style={{ marginTop: '10px' }}>{date}</Typography>
        <Button
          variant={selected ? "contained" : "outlined"}
          className={selected ? SelectedButton : SelectButton}
          fullWidth={false}
        >
          {selected ? "Selected" : "Select"}
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default TemplateCard;
