import React, { ReactElement, useState } from "react";
import "./App.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TTZButton } from "./TTZButton";
import { Link } from "react-router-dom";
import { calculateEnchant } from "./services";

const defaultPrices = {
  normalPrice: 35000000,
  blessedPrice: 226000000,
  destructionPrice: 70000000000,
  l2esPrice: 15000000000,
};

export function EnchantingPage(): ReactElement {
  const [item, setItem] = useState("100");
  const [cleanPrice, setCleanPrice] = useState(100000000);
  const [desired, setDesired] = useState("4");
  const [prices, setPrices] = useState(defaultPrices);
  const [crystalsValue, setCrystalsValue] = useState(0);
  const [costDisplay, setCostDisplay] = useState("0");
  const [pathDisplay, setPathDisplay] = useState(
    "Enchant to +3 with normal scrolls"
  );

  const handleClick = () => {
    setCostDisplay(
      Math.ceil(
        calculateEnchant({
          itemType: item,
          itemCost: cleanPrice,
          desiredEnchant: desired,
          scrollsPrices: prices,
          crystalsValue: crystalsValue,
        }).enchantmentCost
      ).toLocaleString()
    );
    setPathDisplay(
      calculateEnchant({
        itemType: item,
        itemCost: cleanPrice,
        desiredEnchant: desired,
        scrollsPrices: prices,
        crystalsValue: crystalsValue,
      }).enchantmentPath
    );
  };

  return (
    <div className="enchanting-page">
      <header className="App-header">Enchanting</header>
      <div className="flex-row items-desired">
        <FormControl sx={{ minWidth: "11rem" }} focused>
          <InputLabel id="item-type-label">Item</InputLabel>
          <Select
            labelId="item-type-label"
            id="item-select"
            value={item}
            label="Item"
            onChange={(newValue) => setItem(newValue.target.value)}
          >
            <MenuItem value={"100"}>Physical weapon</MenuItem>
            <MenuItem value={"101"}>Magical weapon</MenuItem>
            <MenuItem value={"102"}>Armor or jewelry</MenuItem>
            <MenuItem value={"103"}>Full body armor</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: "11rem" }} focused>
          <InputLabel id="desired-label">Desired</InputLabel>
          <Select
            labelId="desired-label"
            id="desired-select"
            value={desired}
            label="Desired"
            onChange={(newValue) => {
              setDesired(newValue.target.value);
            }}
          >
            <MenuItem value={4}>+4</MenuItem>
            <MenuItem value={5}>+5</MenuItem>
            <MenuItem value={6}>+6</MenuItem>
            <MenuItem value={7}>+7</MenuItem>
            <MenuItem value={8}>+8</MenuItem>
            <MenuItem value={9}>+9</MenuItem>
            <MenuItem value={10}>+10</MenuItem>
            <MenuItem value={11}>+11</MenuItem>
            <MenuItem value={12}>+12</MenuItem>
            <MenuItem value={13}>+13</MenuItem>
            <MenuItem value={14}>+14</MenuItem>
            <MenuItem value={15}>+15</MenuItem>
            <MenuItem value={16}>+16</MenuItem>
            <MenuItem value={17}>+17</MenuItem>
            <MenuItem value={18}>+18</MenuItem>
            <MenuItem value={19}>+19</MenuItem>
            <MenuItem value={20}>+20</MenuItem>
          </Select>
        </FormControl>
      </div>{" "}
      <div className="flex-row scrolls">
        <TextField
          variant="standard"
          focused
          id="clean-price"
          label="Clean item price"
          defaultValue={cleanPrice}
          onChange={(newValue) =>
            setCleanPrice(parseInt(newValue.target.value))
          }
        />
        <TextField
          variant="standard"
          focused
          id="crystals-value"
          label="Crystallization value"
          defaultValue={crystalsValue}
          onChange={(newValue) =>
            setCrystalsValue(parseInt(newValue.target.value))
          }
        />
      </div>
      <div className="flex-row scrolls">
        <TextField
          variant="standard"
          focused
          id="enchant-price"
          label="Normal enchant scroll price"
          defaultValue={prices.normalPrice}
          onChange={(newValue) =>
            setPrices({
              normalPrice: parseInt(newValue.target.value),
              blessedPrice: defaultPrices.blessedPrice,
              destructionPrice: defaultPrices.destructionPrice,
              l2esPrice: defaultPrices.l2esPrice,
            })
          }
        />
        <TextField
          variant="standard"
          focused
          id="blessed-price"
          label="Blessed enchant scroll price"
          defaultValue={prices.blessedPrice}
          onChange={(newValue) =>
            setPrices({
              normalPrice: defaultPrices.normalPrice,
              blessedPrice: parseInt(newValue.target.value),
              destructionPrice: defaultPrices.destructionPrice,
              l2esPrice: defaultPrices.l2esPrice,
            })
          }
        />
      </div>
      <div className="flex-row scrolls">
        <TextField
          variant="standard"
          focused
          id="destruction-price"
          label="Destruction enchant scroll price"
          defaultValue={prices.destructionPrice}
          onChange={(newValue) =>
            setPrices({
              normalPrice: defaultPrices.normalPrice,
              blessedPrice: defaultPrices.blessedPrice,
              destructionPrice: parseInt(newValue.target.value),
              l2esPrice: defaultPrices.l2esPrice,
            })
          }
        />
        <TextField
          sx={{ color: "white" }}
          variant="standard"
          focused
          id="l2es-price"
          label="L2es enchant scroll price"
          defaultValue={prices.l2esPrice}
          onChange={(newValue) =>
            setPrices({
              normalPrice: defaultPrices.normalPrice,
              blessedPrice: defaultPrices.blessedPrice,
              destructionPrice: defaultPrices.destructionPrice,
              l2esPrice: parseInt(newValue.target.value),
            })
          }
        />
      </div>
      <TextField
        variant="standard"
        focused
        value={costDisplay}
        id="price-display"
        label="Expected price"
        InputProps={{
          readOnly: true,
        }}
      />
      <Typography id="path-display">{pathDisplay}</Typography>
      <TTZButton variant="outlined" onClick={handleClick}>
        Calculate
      </TTZButton>
      <Link to="/">
        <TTZButton variant="outlined">Go back</TTZButton>
      </Link>
    </div>
  );
}
