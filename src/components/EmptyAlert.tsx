import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export function EmptyAlert() {
  return (
    <Alert className="mt-4 bg-[rgb(41,41,47)] text-white">
      <AlertTitle>Oops</AlertTitle>
      <AlertDescription>
        The blog you tried to search is either taken down or not written. Please check for typos or try again later.
      </AlertDescription>
    </Alert>
  );
}
