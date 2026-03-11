import properties from "@/data/properties.json";
import { Property } from "@/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/propertyDetail";

type PageProps = {
  params: {
    id: string;
  };
};

export default function PropertyDetailPage({ params }: PageProps) {
  const typedProperties = properties as Property[];

  const property = typedProperties.find(
    (item) => item.id === Number(params.id)
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Back to properties
      </Link>

      <PropertyDetail property={property} />
    </main>
  );
}
