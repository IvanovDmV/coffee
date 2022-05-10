import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const CoffeeItem = ({ coffee }) => {
  return (
    <Grid item xs={10} sm={6} lg={4}>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          maxWidth: "100%",
          opacity: 0.9,
        }}
      >
        <CardMedia
          component="img"
          image="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/05/CoffeeStomachPains-533906501-770x533-1-650x428.jpg"
          alt={coffee.blend_name}
          title={coffee.blend_name}
          sx={{ height: "100wh" }}
        />
        <CardContent>
          <Typography variant="h6" align="right">
            {coffee.blend_name}
          </Typography>
          <Typography variant="subtitle1" align="right" sx={{ mb: 3 }}>
            {coffee.origin}
          </Typography>
          <Typography variant="body2">{coffee.notes}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CoffeeItem;
