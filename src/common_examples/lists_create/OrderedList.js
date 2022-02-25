// Add one <h1> element in it.
// Add one <p> element in it.
// Add list of fav 5 Netflix Series in, It using an ordered list.

import React from "react";

const OrderedList = () => {
  return (
    <div>
      <h1>Fav Netflix Series</h1>
      <p>This is all my fav Netflix series</p>
      <ol>
        <li>Money Heist (2017-2021)</li>
        <li>Narcos (2015–2017)</li>
        <li>Daredevil (2015–2018) TV-MA | 54 min | Action, Crime, Drama.</li>
        <li>Stranger Things (2016– )</li>
        <li>Godless (2017)</li>
      </ol>
    </div>
  );
};

export default OrderedList;
