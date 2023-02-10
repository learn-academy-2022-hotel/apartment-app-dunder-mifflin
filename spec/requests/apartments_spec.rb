require "rails_helper"

RSpec.describe "Apartments", type: :request do
    describe "GET /index" do
        it 'returns a list of apartments' do
        
          user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
          
          user.apartments.create(
            street: "4 Privet Drive",
            city: "Little Whinging",
            state: "Surrey",
            manager: "Mr. Potter",
            email: "potter@example.com",
            price: 2000,
            bedrooms: 3,
            bathrooms: 2,
            pets: "yes",
            image: "https://c8.alamy.com/comp/B0RJGE/   small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
            user_id:1
            )
            
            get '/apartments'
            
            apartments = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(apartments.length).to eq(1)
          end
        end
        
        describe "POST /create" do
          it "creates a new apartment" do
            user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
     
            apartment_params = {
              apartment: {
                street: '123 ABC Rd',
                city: 'National City',
                state:'Ca(li)',
                manager: 'Oscar G.',
                email: 'oscar@email.com',
                price: 1000000,
                bedrooms: 1,
                bathrooms: 1,
                pets: 'No',
                image: 'https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg',
                user_id: user.id
          }
        }

        post '/apartments', params: apartment_params
        expect(response).to have_http_status(200)

        apt = Apartment.first
        expect(apt.manager).to eq('Oscar G.')
      end
    end
end
