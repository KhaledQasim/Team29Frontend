{Newproducts.map((product, index) => (
  <div key={index} className="col-md-6 col-lg-4 col-xl-3 p-2 new">
    <div className="special-img collection-img position-relative">
      <img
        src={product.image}
        className="w-100"
        alt="product"
      />
      <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
        sale
      </span>
    </div>
    <div className="text-center">
      <div className="rating mt-3">
        <span className="text-primary">
          <i className="fas fa-star" />
        </span>
        <span className="text-primary">
          <i className="fas fa-star" />
        </span>
 <span className="text-primary">
          <i className="fas fa-star" />
        </span>
        <span className="text-primary">
          <i className="fas fa-star" />
        </span>
        <span className="text-primary">
          <i className="fas fa-star" />
        </span>
      </div>
      <p className="text-capitalize my-1">{product.name}</p>
      <span className="fw-bold">{"£" + product.price / 100}</span>
    </div>
  </div>
))}

 export default function Home() {
  const [, setProducts] = useState([]);

  useEffect(() => {
    const initializeIsotope = () => {

      const iso = new Isotope('.collection-list', {
        itemSelector: '.col-md-6',
        layoutMode: 'fitRows',
      });

      iso.arrange({ filter: '*' });


      const filterButtons = document.querySelectorAll('.filter-button-group button');
      filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });

          filterButtons.forEach((btn) => {
            btn.classList.remove('active-filter-btn');
          });
          button.classList.add('active-filter-btn');
        });
      });
    };

    if (document.readyState === 'complete') {
      initializeIsotope();
    } else {
      window.addEventListener('load', initializeIsotope);
    }

    return () => {
      window.removeEventListener('load', initializeIsotope);
    };
  }, [Newproducts]);
}

 const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [Newproducts, setNewProducts] = useState([]);

  const loadProducts = async () => {
    await axios.get("/products").then((res) => setProducts(res.data));
  };
  const newProducts = async () => {
    await axios.get("/products/new").then((res) => setNewProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
    newProducts();
  }, []);

  useEffect(() => {

    const initializeIsotope = () => {
      const iso = new Isotope(".collection-list", {
        itemSelector: ".col-md-6",
        layoutMode: "fitRows",
      });

      iso.arrange({ filter: "*" });

      const filterButtons = document.querySelectorAll(
        ".filter-button-group button"
      );
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const filterValue = button.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });

          filterButtons.forEach((btn) => {
            btn.classList.remove("active-filter-btn");
          });
          button.classList.add("active-filter-btn");
        });
      });
    };

    if (document.readyState === "complete") {
      initializeIsotope();
    } else {
      window.addEventListener("load", initializeIsotope);
    }

    return () => {
      window.removeEventListener("load", initializeIsotope);

    };
  }, []);