import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 280,
  border: '2px solid #d3d3d3',
  borderRadius: '8px',
  '&:hover': {
    border: '2px solid #6200ea',
  },
  position: 'relative',
}));

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const ApprovedChip = styled(Chip)({
  backgroundColor: '#e0ffe0',
  color: '#4caf50',
});

const SelectButton = styled(Button)(({ selected }) => ({
  borderColor: selected ? '#6200ea' : '#6200ea',
  color: selected ? '#ffffff' : '#6200ea',
  backgroundColor: selected ? '#6200ea' : 'transparent',
  position: 'absolute',
  right: '10px',
  bottom: '10px',
}));

const TemplateCard = ({ image, title, status, category, description, date, selected, onSelect }) => {
  return (
    <StyledCard>
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
        <Typography variant="body2" component="p" style={{ marginTop: '10px', whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
        <Typography variant="caption" color="textSecondary" style={{ marginTop: '10px' }}>{date}</Typography>
        <SelectButton
          variant="outlined"
          selected={selected}
          onClick={onSelect}
        >
          {selected ? "Selected" : "Select"}
        </SelectButton>
      </CardContent>
    </StyledCard>
  );
};

export default TemplateCard;
