import { createClient } from "@supabase/supabase-js";

const UseUpdate = async (id, name, title, description) => {
  const supabase = createClient(
    "https://gfnqrowfqknvdwngbped.supabase.co",
    process.env.NEXT_PUBLIC_API_KEY
  );
  const a =    supabase
  .from(name)
  .update({
    title: title,
    description: description,
  })
  .eq("id", id)
  .then((response) => {
    console.log("Updated row:", response);
  })
  .catch((error) => {
    console.error("Error updating row:", error);
  });
  return a;
};

export default UseUpdate;
