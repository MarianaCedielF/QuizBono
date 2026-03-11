import { Property } from "@/lib/types";

type PropertyDetailProps = {
  property: Property;
};

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="detail-card">
      <div className="detail-header">
        <div>
          <h1>{property.propertyName}</h1>
          <p className="city">{property.city}</p>
        </div>
        <p className="price">{property.price}</p>
      </div>

      <div className="detail-grid">
        <div className="detail-section">
          <h3>Property Information</h3>
          <p>
            <strong>Rooms:</strong> {property.rooms}
          </p>
          <p>
            <strong>Baths:</strong> {property.baths}
          </p>
          <p>
            <strong>Garage:</strong> {property.garage ? "Yes" : "No"}
          </p>
          <p>
            <strong>Floor:</strong> {property.floor}
          </p>
          <p>
            <strong>Address:</strong> {property.address}
          </p>
        </div>

        <div className="detail-section">
          <h3>Owner Contact</h3>
          <p>
            <strong>Name:</strong> {property.fullName}
          </p>
          <p>
            <strong>Phone:</strong> {property.phone}
          </p>
          <p>
            <strong>Email:</strong> {property.email}
          </p>
        </div>

        <div className="detail-section full-width">
          <h3>Location</h3>
          <p>
            <strong>Latitude:</strong> {property.latitute}
          </p>
          <p>
            <strong>Longitude:</strong> {property.longitude}
          </p>
        </div>
      </div>
    </div>
  );
}