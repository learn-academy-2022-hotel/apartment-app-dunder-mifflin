require "rails_helper"

RSpec.describe Apartment, type: :model do
    it 'is not valid without street' do
        Skully = Apartment.create( 
            city:'San Diego', 
            state:'CA', 
            manager:'Dwight', 
            email:'d123@gmail.com', 
            price:'2500', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )   
        expect(Skully.errors[:street]).to_not be_empty
    end
    it 'is not valid without city' do
        Skully = Apartment.create(
            street:'123 street ave', 
            state:'CA', 
            manager:'Dwight', 
            email:'d123@gmail.com', 
            price:'2500', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:city]).to_not be_empty
    end
    it 'is not valid without state' do
        Skully = Apartment.create( 
            street:'123 street ave', 
            manager:'Dwight', 
            email:'d123@gmail.com', 
            price:'2500', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:state]).to_not be_empty
    end
    it 'is not valid without manager' do
        Skully = Apartment.create( 
            street:'123 street ave', 
            state:'CA', 
            email:'d123@gmail.com', 
            price:'2500', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:manager]).to_not be_empty
    end
    it 'is not valid without email' do
        Skully = Apartment.create(
            street:'123 street ave', 
            state:'CA', 
            manager:'Dwight', 
            price:'2500', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:email]).to_not be_empty
    end
    it 'is not valid without price' do
        Skully = Apartment.create( 
            street:'123 street ave', 
            state:'CA', 
            manager:'Dwight', 
            email:'d123@gmail.com', 
            bedrooms:3, 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:price]).to_not be_empty
    end
    it 'is not valid without bedrooms' do
        Skully = Apartment.create(
            street:'123 street ave', 
            state:'CA', 
            manager:'Dwight', 
            email:'d123@gmail.com', 
            price:'2500', 
            bathrooms:2, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:bedrooms]).to_not be_empty
    end
    it 'is not valid without bathrooms' do
        Skully = Apartment.create( 
            street:'123 street ave', 
            state:'CA', manager:'Dwight', 
            email:'d123@gmail.com', 
            price:'2500', 
            bedrooms:3, 
            pets:'Yes', 
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:bathrooms]).to_not be_empty
    end
    it 'is not valid without pets' do
        Skully = Apartment.create( 
            street:'123 street ave',
            state:'CA',
            manager:'Dwight',
            email:'d123@gmail.com',
            price:'2500',
            bedrooms:3,
            bathrooms:2,
            image:'image.url.com',
            user_id:1
        )
        expect(Skully.errors[:pets]).to_not be_empty
    end
    it 'is not valid without image' do
        Skully = Apartment.create( 
            street:'123 street ave',
            state:'CA',
            manager:'Dwight',
            email:'d123@gmail.com',
            price:'2500',
            bedrooms:3,
            bathrooms:2,
            pets:'Yes',
            user_id:1
        )
        expect(Skully.errors[:image]).to_not be_empty
    end
    it 'is not valid without user_id' do
        Skully = Apartment.create(
            street:'123 street ave', 
            state:'CA',
            manager:'Dwight', 
            email:'d123@gmail.com',
            price:'2500',
            bedrooms:3,
            bathrooms:2,
            pets:'Yes',
            image:'image.url.com'
        )
        expect(Skully.errors[:user_id]).to_not be_empty
    end
end