import React from "react"
import {Card, CardTitle, CardText, CardBody, CardSubtitle, Button} from 'reactstrap'

const ApartmentIndex = ({ apartments }) => {
  console.log();
  return (
    <main>
      {apartments?.map((apartment, index) => {
        return(
              <Card
                style={{
                  width: '18rem'
                }}
                key={index}
              >
                <img
                  alt={`apartment listing for apartment located on ${apartment.street}`}
                  src={`${apartment.image}`}
                />
                <CardBody>
                  <CardTitle tag="h5">
                   {`$${apartment.price} /month`}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {`${apartment.street}, ${apartment.city}, ${apartment.state}`}
                  </CardSubtitle>
                  <CardText>
                    {`${apartment.bedrooms} Bedrooms, ${apartment.bathrooms} Bathrooms`}
                  </CardText>
                  <Button>
                   More Details
                  </Button>
                </CardBody>
              </Card>
        )
      })}
    </main>
  )
}

export default ApartmentIndex
