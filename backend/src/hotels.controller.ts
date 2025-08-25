import { Controller, Get } from '@nestjs/common';

@Controller('hotels')
export class HotelsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'Atana Hotel',
        address: 'Tecom, Hessa Street, Al Barsha South, Dubai, UAE',
        price: 300,
        coords: [25.1021838, 55.1785],
      },
      {
        id: 2,
        name: 'Hilton Dubai Palm Jumeirah',
        address: 'Palm West Beach, Palm Juneirah, Dubai, UAE',
        price: 900,
        coords: [25.1055436, 55.14710095010157],
      },
      {
        id: 3,
        name: 'Resivation Hotel',
        address: 'Resivation Al Furjan Dubai, Dubai, UAE',
        price: 200,
        coords: [25.10940195, 55.2032901],
      },
      {
        id: 4,
        name: 'Nikki Beach Resort & Spa Dubai',
        address: 'Pearl Jumeira, Dubai, UAE',
        price: 1400,
        coords: [25.0842869, 55.1404317],
      },
      {
        id: 5,
        name: 'Exe Zarzuela Park',
        address: 'Dario Aparicio, 32, Монклоа-Аравака, 28023 Madrid, Spain',
        price: 2050,
        coords: [40.4711423, -3.769011053507051],
      },
      {
        id: 6,
        name: 'Stephouse Pozuelo Europa',
        address: '26C Avenida de Europa, 28224 Madrid, Spain',
        price: 700,
        coords: [40.4390885, -3.7930351],
      },
      {
        id: 7,
        name: 'Exe Moncloa',
        address: 'Arcipreste de Hita, 10, 28015 Madrid, Spain',
        price: 1350,
        coords: [40.4338665, -3.7175914],
      },
      {
        id: 8,
        name: 'Lemon Apartment & Hotels Bernabeu',
        address: 'Calle del Limonero 27, 28020 Madrid, Spain',
        price: 1300,
        coords: [40.46209755, -3.6963392314389703],
      },
      {
        id: 9,
        name: 'Hotel Carasco',
        address: 'Porto Delle Genti, 98055 Lipari, Italy',
        price: 1800,
        coords: [38.420193, 14.951159527684876],
      },
      {
        id: 10,
        name: 'Villa Belvedere Langhe',
        address: '2 Via Cillario, 12060 Belvedere Langhe, Italy',
        price: 1100,
        coords: [44.56234783765563, 8.057802566603547],
      },
      {
        id: 11,
        name: 'Chez William',
        address: '138, rue dEpinay France, 95100 La Celle-sous-Gouzon, France',
        price: 1400,
        coords: [46.2116974, 2.2069457],
      },
      {
        id: 12,
        name: 'Best Western Plus La Demeure',
        address: '51, Boulevard Saint Marcel, 13th arr., 75013 Paris, France',
        price: 1400,
        coords: [48.8382809, 2.3608339],
      },
    ];
  }
}
