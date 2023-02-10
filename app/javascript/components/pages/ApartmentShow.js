import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardTitle, CardText, CardBody, CardSubtitle } from "reactstrap"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  return (
    <main>
      {currentApartment && (
        <Card
          style={{
            width: "18rem"
          }}
          key={id}
        >
          <img
            alt={`apartment listing for apartment located on ${currentApartment.street}`}
            src={`${currentApartment.image}`}
          />
          <CardBody>
            <CardTitle tag="h5">
              {`$${currentApartment.price} /month`}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {`${currentApartment.street}, ${currentApartment.city}, ${currentApartment.state}`}
            </CardSubtitle>
            <CardText>
              {`${currentApartment.bedrooms} Bedrooms, ${currentApartment.bathrooms} Bathrooms`}
            </CardText>
            <CardText>
              {`Email: ${currentApartment.email} 
              Manager: ${currentApartment.manager}`}
            </CardText>
            <CardText>
              {`Pets: ${currentApartment.pets}`}
            </CardText>
          </CardBody>
        </Card>
      )}
    </main>
  )
}

export default ApartmentShow
