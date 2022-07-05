import React, { useState, useEffect, useCallback } from "react";
import { Button } from "antd";
import classNames from "classnames";

function QuantitySelector({
  min,
  max,
  defaultValue,
  onChange,
  size,
  noRound,
  className,
  onDecrease,
  onIncrease,
}) {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onChange && onChange(value);
  }, [value]);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = useCallback(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }
      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = useCallback(() => {
    if (value >= max) {
      return;
    }
    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return (
    <div
      className={`quantity-selector ${classNames(className)} -${classNames(
        size
      )} -${classNames({ "no-round": noRound })}`}
    >
      <Button
        className="quantity-selector-controller"
        type="link"
        disabled={value <= min || value <= 1}
        onClick={decreaseValue}
      >
        -
      </Button>
      <div className="quantity-selector-number">{value}</div>
      <Button
        className="quantity-selector-controller"
        type="link"
        disabled={value >= max}
        onClick={increaseValue}
      >
        +
      </Button>
    </div>
  );
}

export default React.memo(QuantitySelector);
