import { async } from "@firebase/util";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const UseDelete = async (id, name) => {
  const supabase = createClient(
    "https://gfnqrowfqknvdwngbped.supabase.co",
    process.env.NEXT_PUBLIC_API_KEY
  );
  const a = await supabase
    .from(name)
    .delete()
    .eq("id", id)
    .then((response) => {
      console.log("Deleted row:", response);
    })
    .catch((error) => {
      console.error("Error deleting row:", error);
    });
  return a;
};

export default UseDelete;
