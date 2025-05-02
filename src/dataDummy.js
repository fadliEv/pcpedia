const dataDummy = [
    {
      id: 1,
      name: 'Laptop XYZ',
      price: 15000000,
      stock: 0, // Menambahkan stock
      description: 'Laptop canggih dengan performa tinggi untuk gaming, desain grafis, dan pekerjaan berat. Ditenagai oleh prosesor terbaru dengan kemampuan multitasking yang luar biasa.',
      longDescription: 'Laptop XYZ hadir dengan layar 15.6 inci Full HD yang memanjakan mata. Dilengkapi dengan kartu grafis NVIDIA untuk pengalaman gaming yang lancar, serta teknologi pendingin terbaru untuk memastikan performa maksimal tanpa overheating. Ideal untuk pekerja profesional, gamer, dan content creator.',
      imgUrl: 'https://imgs.search.brave.com/7oJNy4PHyjAM0fweLq5m6PDbseTw6Z7KhPSHWNTPgZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vTGVu/b3ZvLUxlZ2lvbi1Q/cm8tNWktMTYtV1FY/R0EtMjQwSHotR2Ft/aW5nLUxhcHRvcC1J/bnRlbC1Db3JlLWk5/LTE0OTAwSFgtTlZJ/RElBLUdlRm9yY2Ut/UlRYLTQwNzAtUkdC/LUJhY2tsaXQtS0It/V2luZG93cy0xMS1Q/cm8tRnJlZS1PZmZp/Y2UtUHJvLTMyR0It/RERfMGQyNDdiMmYt/ODBmNS00YWNkLWI3/NDYtNDViZWIyMWU2/ZGVlLjQxMTk2MWI0/ZGFkNmMyMDdmZTVk/MGRkZDg4NTllNTk4/LmpwZWc_b2RuSGVp/Z2h0PTU4MCZvZG5X/aWR0aD01ODAmb2Ru/Qmc9RkZGRkZG',
      rate: 4.5,
      terjual: 120,
      getDiscountedPrice() {
        return this.price * (1 - 0.1); // Diskon 10%
      },
      getDiscountPercentage() {
        return 10; // Diskon 10%
      }
    },
    {
      id: 2,
      name: 'Keyboard ABC',
      price: 500000,
      stock: 50,
      description: 'Keyboard mekanikal dengan pencahayaan RGB. Menawarkan pengalaman mengetik yang responsif dan nyaman, cocok untuk gamer maupun pekerja profesional.',
      longDescription: 'Keyboard ABC dilengkapi dengan switch mekanikal yang memberikan feedback yang jelas saat digunakan. Pencahayaan RGB dapat diatur untuk mencocokkan gaya Anda. Didesain ergonomis untuk kenyamanan mengetik dalam waktu lama, serta memiliki ketahanan yang sangat baik.',
      imgUrl: 'https://imgs.search.brave.com/qWzILvMPgXSRuMTX5KsjQ4j2J9nJHJ6wnLArsBOgO7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lbGVnYW50LWdh/bWluZy1rZXlib2Fy/ZC1uZXV0cmFsLWJh/Y2tncm91bmRfMTEw/NjQ5My0yMTcyMDIu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA',
      rate: 3,
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
      stock: 100,
      description: 'Mouse optik responsif dengan desain ergonomis. Cocok untuk penggunaan sehari-hari atau gaming ringan dengan sensor yang sangat akurat.',
      longDescription: 'Mouse optik DEF memiliki desain ergonomis yang nyaman digunakan dalam waktu lama. Dilengkapi dengan sensor optik yang memberikan akurasi tinggi dan kecepatan respons yang luar biasa, cocok untuk gaming dan pekerjaan kantoran.',
      imgUrl: 'https://imgs.search.brave.com/QggAIQq9y3Lbhhep6ldYN34NLT8IMHoTYqMe2VCI_lE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzI1LzY3LzUy/LzM2MF9GXzYyNTY3/NTI1Nl9ZT3hXSmFD/TmM0bEdSYU92YWhy/MlRQMzlHM21hSER5/Ny5qcGc',
      rate: 2,
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
      stock: 0,
      description: 'Monitor 4K UHD dengan panel IPS untuk tampilan tajam dan warna akurat, ideal untuk desain grafis atau gaming.',
      longDescription: 'Monitor ini menawarkan resolusi 4K dengan kualitas gambar yang luar biasa berkat teknologi panel IPS. Sangat cocok untuk para profesional desain grafis dan gamer yang menginginkan tampilan tajam dan warna akurat.',
      imgUrl: 'https://imgs.search.brave.com/W7S_AGfeR13JMwEABip_CC6Y7ovbBodk-gWg8C-SlbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LWNvbXB1dGVy/LW1vbml0b3ItZGlz/cGxheS13aXRoLWRl/c2tfMjMtMjE1MDc1/NzQ1OS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw',
      rate: 3.5,
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
      stock: 80,
      description: 'SSD cepat dengan kapasitas 1TB untuk meningkatkan performa sistem, mempercepat loading aplikasi dan booting.',
      longDescription: 'SSD 1TB ini menawarkan kecepatan baca/tulis yang luar biasa, mengurangi waktu tunggu dan meningkatkan performa sistem. Ideal untuk gamer, content creator, dan pengguna yang menginginkan peningkatan signifikan dalam kecepatan komputer.',
      imgUrl: 'https://imgs.search.brave.com/JZwlqYjMBbIoSq0ask_bHuM6-bu1gghOuwa83g5bQ80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2hK/VzRKU0MyZ3lKVVg5/QlJoNEpuNWcuanBn',
      rate: 5,
      terjual: 300,
      getDiscountedPrice() {
        return this.price - 100000;
      },
      getDiscountPercentage() {
        return Math.round((100000 / this.price) * 100);
      }
    },
    {
        id: 11,
        name: 'Mouse Gaming X',
        price: 300000,
        stock: 0,  // Stok habis
        description: 'Mouse gaming dengan DPI tinggi dan desain ergonomis.',
        longDescription: 'Mouse Gaming X menawarkan responsivitas tinggi dengan DPI yang dapat diatur sesuai kebutuhan. Desain ergonomis membuatnya nyaman digunakan dalam sesi permainan yang panjang. Dilengkapi dengan pencahayaan RGB yang dapat diubah sesuai preferensi.',
        imgUrl: 'http://imgs.search.brave.com/et4S3dY-4q7YvsQyn_gKySXQ-2zFU9J-PZNPV2RvyqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzI1LzA3LzMx/LzM2MF9GXzYyNTA3/MzEzNV9JaXhLRzJx/N1dMWlVodXVBNW5X/blNtVUIzUFAwbENC/TC5qcGc',
        rate: 2.5,
        terjual: 95,
        getDiscountedPrice() {
          return this.price - 50000; // Diskon 50.000
        },
        getDiscountPercentage() {
          return Math.round((50000 / this.price) * 100);
        }
      },
      {
        id: 12,
        name: 'Monitor 27" LED',
        price: 3500000,
        stock: 0,  // Stok habis
        description: 'Monitor LED 27" dengan resolusi Full HD dan warna tajam.',
        longDescription: 'Monitor 27" LED menawarkan kualitas tampilan luar biasa dengan resolusi Full HD dan panel IPS yang menghasilkan warna akurat. Cocok untuk penggunaan profesional maupun gaming. Monitor ini memiliki desain ramping dengan bezel tipis.',
        imgUrl: 'https://imgs.search.brave.com/we9EqPmSCvOVcbRrxn8Vi_6u4vphbCGjzLPo9NxY50M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFSdUswazZEYkwu/anBn',
        rate: 1,
        terjual: 150,
        getDiscountedPrice() {
          return this.price - 200000; // Diskon 200.000
        },
        getDiscountPercentage() {
          return Math.round((200000 / this.price) * 100);
        }
      },
      {
        id: 13,
        name: 'External Hard Drive 2TB',
        price: 1200000,
        stock: 50,  // Stok tersedia
        description: 'External hard drive dengan kapasitas 2TB dan kecepatan transfer data tinggi.',
        longDescription: 'External Hard Drive 2TB ini menawarkan ruang penyimpanan yang luas dengan kecepatan transfer data yang tinggi, ideal untuk backup data, penyimpanan video, foto, dan game. Kompatibel dengan berbagai sistem operasi.',
        imgUrl: 'https://imgs.search.brave.com/hjwO1JcbaW_-FnPxLh8d9UFlYN-vKJt2fn-CeRFaEQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Jh/bi5pZC93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNC9oYXJk/aXNrLWVrc3Rlcm5h/bC10ZXJiYWlrLTEx/LmpwZw',
        rate: 4.8,
        terjual: 250,
        getDiscountedPrice() {
          return this.price - 150000; // Diskon 150.000
        },
        getDiscountPercentage() {
          return Math.round((150000 / this.price) * 100);
        }
      }
  ];
  
  export default dataDummy;
  