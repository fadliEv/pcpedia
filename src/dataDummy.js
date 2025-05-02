const dataDummy = [
    {
      id: 1,
      name: 'Laptop XYZ',
      price: 15000000,
      description: 'Laptop canggih dengan performa tinggi untuk gaming dan pekerjaan berat.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.5,
      terjual: 120,
      getDiscountedPrice() {
        return this.price - 1000000;
      },
      getDiscountPercentage() {
        return Math.round((1000000 / this.price) * 100);
      }
    },
    {
      id: 2,
      name: 'Keyboard ABC',
      price: 500000,
      description: 'Keyboard mekanikal dengan pencahayaan RGB.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.7,
      terjual: 230,
      getDiscountedPrice() {
        return this.price - 50000;
      },
      getDiscountPercentage() {
        return Math.round((50000 / this.price) * 100);
      }
    },
    {
      id: 3,
      name: 'Mouse Optik DEF',
      price: 250000,
      description: 'Mouse optik responsif dengan desain ergonomis.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.6,
      terjual: 180,
      getDiscountedPrice() {
        return this.price - 30000;
      },
      getDiscountPercentage() {
        return Math.round((30000 / this.price) * 100);
      }
    },
    {
      id: 4,
      name: 'Monitor 24" UHD',
      price: 4500000,
      description: 'Monitor 4K UHD dengan panel IPS untuk tampilan tajam dan warna akurat.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.8,
      terjual: 90,
      getDiscountedPrice() {
        return this.price - 500000;
      },
      getDiscountPercentage() {
        return Math.round((500000 / this.price) * 100);
      }
    },
    {
      id: 5,
      name: 'SSD 1TB',
      price: 1200000,
      description: 'SSD cepat dengan kapasitas 1TB untuk meningkatkan performa sistem.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.9,
      terjual: 300,
      getDiscountedPrice() {
        return this.price - 100000;
      },
      getDiscountPercentage() {
        return Math.round((100000 / this.price) * 100);
      }
    },
    {
      id: 6,
      name: 'Headphone XYZ',
      price: 700000,
      description: 'Headphone dengan noise-cancelling dan kualitas suara jernih.',
      imgUrl: 'https://imgs.search.brave.com/G4aKCoH6NN4eeZUoscyMGM3oEPGyVhKiGfFd1gx7Q1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/ODQ3MjE4L3Bob3Rv/L2hlYWRwaG9uZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZYTEtIVXRHZEQ4/cFBIOFB6UkhTLTg3/UW5kekRzc1pwTWRz/T2ZaTmhLdVU9',
      rate: 4.4,
      terjual: 150,
      getDiscountedPrice() {
        return this.price - 70000;
      },
      getDiscountPercentage() {
        return Math.round((70000 / this.price) * 100);
      }
    },
    {
      id: 7,
      name: 'Keyboard Mekanik HIJ',
      price: 800000,
      description: 'Keyboard mekanikal dengan switch Blue dan pencahayaan RGB.',
      imgUrl: 'https://imgs.search.brave.com/rrXSlsCsIVWGzBy0IoJS2QlwbmakSoolHJB5Oo5HQ6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYW5o/YXR0YW5wcm9kdWN0/cy51cy9jZG4vc2hv/cC9wcm9kdWN0cy8x/ODA2MTBoaWdoXzEy/LTEuanBnP3Y9MTY3/MzI5MjIyOSZ3aWR0/aD0yMDAw',
      rate: 4.3,
      terjual: 75,
      getDiscountedPrice() {
        return this.price - 80000;
      },
      getDiscountPercentage() {
        return Math.round((80000 / this.price) * 100);
      }
    },
    {
      id: 8,
      name: 'Power Supply 650W',
      price: 600000,
      description: 'Power supply 650W berkualitas untuk PC dengan berbagai perlindungan.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.7,
      terjual: 95,
      getDiscountedPrice() {
        return this.price - 50000;
      },
      getDiscountPercentage() {
        return Math.round((50000 / this.price) * 100);
      }
    },
    {
      id: 9,
      name: 'GPU NVIDIA RTX 3060',
      price: 8500000,
      description: 'Kartu grafis dengan performa tinggi untuk gaming dan desain grafis.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.9,
      terjual: 45,
      getDiscountedPrice() {
        return this.price - 700000;
      },
      getDiscountPercentage() {
        return Math.round((700000 / this.price) * 100);
      }
    },
    {
      id: 10,
      name: 'Laptop Gaming ABC',
      price: 12000000,
      description: 'Laptop gaming dengan spesifikasi tinggi dan layar refresh rate 144Hz.',
      imgUrl: 'https://imgs.search.brave.com/zvT2c4UAD649NVLb9Px6BUHTUD0HEMbIy8yyNqiJ1n4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzA0LzI4Lzk2/LzM2MF9GXzUwNDI4/OTYwNV96ZWhKaUsw/dEN1WkxQMk1kZkZC/cGNKZE9WeEtMblhn/MS5qcGc',
      rate: 4.6,
      terjual: 65,
      getDiscountedPrice() {
        return this.price - 1000000;
      },
      getDiscountPercentage() {
        return Math.round((1000000 / this.price) * 100);
      }
    }
  ];
  
  export default dataDummy;
  