import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home",
};

const Homepage = () => {
  return (
    <div className="bg-yellow-200">
      We recommend using variable fonts for the best performance and
      flexibility. But if you can't use a variable font, you will need to
      specify a weight:
      <div className="h3-bold">This is a bold heading</div>
      <Button className="mt-4">Click Me</Button>
    </div>
  );
};

export default Homepage;
