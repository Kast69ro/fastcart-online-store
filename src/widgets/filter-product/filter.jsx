import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  TextField,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getProduct } from "../../entities/api/home/home";
import { getBrand } from "../../entities/api/products/products";

const FilterProduct = () => {
  const category = useSelector((state) => state.home.dataCategory);
  const brand = useSelector((state) => state.products.brandData);
  const dispatch = useDispatch();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategoryId = params.get("categoryId");

  const [selectedCategory, setSelectedCategory] = useState(
    initialCategoryId ? Number(initialCategoryId) : null
  );
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getBrand());
  }, [dispatch]);

  useEffect(() => {
    const minVal = min === "" ? 0 : Number(min);
    const maxVal = max === "" ? undefined : Number(max);

    dispatch(
      getProduct({
        MinPrice: minVal,
        MaxPrice: maxVal,
        CategoryId: selectedCategory,
        BrandId: selectedBrand,
      })
    );
  }, [dispatch, selectedCategory, selectedBrand, min, max]);

  const applyFilter = () => {
    const minVal = min === "" ? 0 : Number(min);
    const maxVal = max === "" ? undefined : Number(max);

    dispatch(
      getProduct({
        MinPrice: minVal,
        MaxPrice: maxVal,
        CategoryId: selectedCategory,
        BrandId: selectedBrand,
      })
    );
  };

  const resetFilter = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setMin("");
    setMax("");

    dispatch(
      getProduct({
        MinPrice: 0,
        MaxPrice: undefined,
        CategoryId: null,
        BrandId: null,
      })
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            value={selectedCategory}
            onChange={(e) => {
              const id = e.target.value === "null" ? null : e.target.value;
              setSelectedCategory(id);
            }}
          >
            <FormControlLabel
              value="null"
              control={<Radio />}
              label="All Products"
            />
            {category.map((e) => (
              <FormControlLabel
                key={e.id}
                value={e.id}
                control={<Radio />}
                label={e.categoryName}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            value={selectedBrand}
            onChange={(e) => {
              const id = e.target.value === "null" ? null : e.target.value;
              setSelectedBrand(id);
            }}
          >
            <FormControlLabel
              value="null"
              control={<Radio />}
              label="All Brands"
            />
            {brand.map((e) => (
              <FormControlLabel
                key={e.id}
                value={e.id}
                control={<Radio />}
                label={e.brandName}
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      <Box p={2} borderTop="1px solid #ccc">
        <Typography fontWeight={600} gutterBottom>
          Price range
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="Min"
            fullWidth
            value={min}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) setMin(val);
            }}
          />
          <TextField
            label="Max (optional)"
            fullWidth
            value={max}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*$/.test(val)) setMax(val);
            }}
          />
        </Box>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mb: 1 }}
          onClick={applyFilter}
        >
          Apply
        </Button>
        <Button variant="outlined" color="error" fullWidth onClick={resetFilter}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FilterProduct;
