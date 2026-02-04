
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium',
    price: 129900,
    originalPrice: 134900,
    discount: '15% off',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRZsX8wVIgsM29XxRklDwaEVdTgTzHnsAqmarUV80dJHbfBREDNZAyBV-9AT9mrcJclHbEo-yCVyEPTgRKdMXfKlNdfP0DMn188pR4ep_qc6UEWl001ks_vzW2Ut-yNJ1yvNXg2JUx67S0r59GTI3RQOW7pYXhbZSEcKaxcn5oIC0bX7_YfOmOYws8sZbRJ-8VSqHQ07tP8JSasaov3TQG2aZHEptHfYgOr56CnoGwb9JyJWAWwspL_P6pCVLNmVuqeKMDgxM6jk5U',
    rating: 4.8,
    reviews: 2450,
    description: 'Experience the peak of performance with the new A17 Pro chip and Aerospace-grade titanium design.',
    category: 'Phones',
    badge: 'Bestseller',
    variants: {
      colors: ['#4E4E4E', '#F5F5F0', '#243139', '#C5C5C5'],
      storage: ['256 GB', '512 GB', '1 TB']
    }
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)',
    price: 124999,
    originalPrice: 139999,
    discount: '10% off',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDiNUTWiHwTHWng-SDippH5y3f0ru7KbEgNho9OnEKi2Gz_3xVP6DuMHYuCxi-_mJHgVKzF4-iKxF-KlDL2cFss9AHbMHMOBm9kVJEtcuky4obTpOGe446F2j_zdXFQfopJSwqrmjTeFcGz_EZK08TfKqHzOUW0FAOBGGKCAxZYEMkkG8icMwjyapjwz1Dbx5qvSMSN53y2fqR5Qbu-YEuKZ5_LpeC_ojpQh4Cb_6H8PALBRaXzV0WKlrUNyAvkk4sJelJukgOR6lz',
    rating: 4.7,
    reviews: 1820,
    description: 'The ultimate AI phone with 200MP camera and Snapdragon 8 Gen 3.',
    category: 'Phones',
    variants: {
      colors: ['#4E4E4E', '#F5F5F0'],
      storage: ['256 GB', '512 GB']
    }
  },
  {
    id: '3',
    name: 'OnePlus 12 (Flowy Emerald, 16GB RAM, 512GB)',
    price: 64999,
    originalPrice: 69999,
    discount: '7% off',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6DunFtH3HM6AWJ3ShDXkDVEwOWUAc7-Zp2suVvsfdM3RzmYV7NMmLWhFylKTGjbjQszp6Cs3ToPgZSyx3OLyP7zslX76sUFihRXLVxCbr1b46mudWecqFEtkRfRc0cUMdCSMG6Qo3dBAkqinIuf6mX_Bqt_MJfMxYnEVquhBxshDaNotyXDhni3CphrAE93o80GSpYOBU1nNfPcvIODjnWRxqfQJk1POXSo0kgXgKwsJMUQx37j43bFsC3Ni1ps3LJvA0DVVgiZFG',
    rating: 4.5,
    reviews: 950,
    description: 'Elite performance meets stunning design with the Flowy Emerald edition.',
    category: 'Phones',
    badge: 'New Arrival',
    variants: {
      colors: ['#006644', '#000000'],
      storage: ['256 GB', '512 GB']
    }
  },
  {
    id: '4',
    name: 'Google Pixel 8 Pro (Bay, 128 GB)',
    price: 106999,
    originalPrice: 114999,
    discount: '6% off',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzzhtbVhNY7fVOClIDDmNl0aJ3fZ-vazeFxQAPz0cFHlx2j4fmXXk6GetPxpL9py78CVMWXSyNuj_YHI-0zQEFKPUYoSuVELu6_ZjGc3CVCO5-c_0FYFN1w3b4R4H4DW--JQyXXnkzLWCM7eYfqvFSAVal3IcaJfaWziYhP7E_U4PVtIZpgml2c78iOWy-ld2CgWbw-CR75CDqoZ4w633-svxW1wregJ88lw0OHl_-VWha2UwlcRBmZVStmxTa-0lqhAT_r3AGmxG',
    rating: 4.6,
    reviews: 1240,
    description: 'The best of Google AI, right in your pocket.',
    category: 'Phones',
    variants: {
      colors: ['#4285F4', '#000000'],
      storage: ['128 GB', '256 GB']
    }
  }
];
