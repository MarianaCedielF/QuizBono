import properties from "@/data/properties.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/propertyDetail";
import { Property } from "@/lib/types";

type RawProperty = Omit<Property, "id">;

type PageProps = {
  params: {
    id: string;
  };
};

export default function PropertyDetailPage({ params }: PageProps) {
  const typedProperties: Property[] = (properties as RawProperty[]).map(
    (property, index) => ({
      ...property,
      id: index + 1,
    })
  );

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