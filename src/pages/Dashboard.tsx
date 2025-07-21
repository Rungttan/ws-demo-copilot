
import { useNavigate } from 'react-router-dom';

type Breed = {
  id: string;
  attributes: {
    name: string;
    description?: string;
    life?: string;
    male_weight?: string;
    female_weight?: string;
    image?: string;
  };
};

const demoBreeds: Breed[] = [
  {
    id: '1',
    attributes: {
      name: 'Golden Retriever',
      description: 'Friendly, intelligent, and devoted. Great family dog.',
      life: '10-12 years',
      male_weight: '30-34 kg',
      female_weight: '25-32 kg',
      image: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg',
    },
  },
  {
    id: '2',
    attributes: {
      name: 'Shiba Inu',
      description: 'Alert, active, and attentive. A spirited Japanese breed.',
      life: '12-15 years',
      male_weight: '8-11 kg',
      female_weight: '6.8-9 kg',
      image: 'https://images.dog.ceo/breeds/shiba/shiba-13.jpg',
    },
  },
  {
    id: '3',
    attributes: {
      name: 'Siberian Husky',
      description: 'Outgoing, friendly, and mischievous. Known for their blue eyes.',
      life: '12-14 years',
      male_weight: '20-27 kg',
      female_weight: '16-23 kg',
      image: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg',
    },
  },
  {
    id: '4',
    attributes: {
      name: 'French Bulldog',
      description: 'Adaptable, playful, and smart. A popular city dog.',
      life: '10-12 years',
      male_weight: '9-14 kg',
      female_weight: '8-13 kg',
      image: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_10147.jpg',
    },
  },
  {
    id: '5',
    attributes: {
      name: 'Border Collie',
      description: 'Energetic, smart, and hardworking. The world’s best herding dog.',
      life: '12-15 years',
      male_weight: '14-20 kg',
      female_weight: '12-19 kg',
      image: 'https://images.dog.ceo/breeds/collie-border/n02106166_3557.jpg',
    },
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-0 py-2 sm:px-0 sm:py-4 md:px-0 md:py-8 w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8 w-full px-2 sm:px-8 md:px-16">
        <h1 className="w-full sm:w-auto text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800 drop-shadow text-center sm:text-left">🐶 Dog Breeds (Demo)</h1>
        <button onClick={handleLogout} className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 sm:px-6 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition w-full sm:w-auto">Logout</button>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 w-full px-0">
        {demoBreeds.map(breed => (
          <div
            key={breed.id}
            className="bg-white rounded-2xl shadow-lg p-2 md:p-4 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-transform duration-200 border border-gray-100 min-h-[260px] md:min-h-[340px] w-full h-full"
          >
            {breed.attributes.image && (
              <img src={breed.attributes.image} alt={breed.attributes.name} className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3 shadow-lg" />
            )}
            <h2 className="text-base md:text-xl font-bold mb-2 text-blue-700 flex items-center gap-2">
              <span>🐾</span> {breed.attributes.name}
            </h2>
            {breed.attributes.description && (
              <p className="mb-2 md:mb-3 text-gray-700 text-xs md:text-sm line-clamp-3">{breed.attributes.description}</p>
            )}
            <div className="mt-auto pt-2 text-xs text-gray-500 space-y-1">
              {breed.attributes.life && <div><span className="font-semibold">Life:</span> {breed.attributes.life}</div>}
              {breed.attributes.male_weight && <div><span className="font-semibold">Male Weight:</span> {breed.attributes.male_weight}</div>}
              {breed.attributes.female_weight && <div><span className="font-semibold">Female Weight:</span> {breed.attributes.female_weight}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
