import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem illum unde fugit enim, nobis reiciendis eligendi dolore
          corporis autem ea omnis illo! Obcaecati labore quod suscipit eum
          facere odio accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          velit impedit temporibus illo libero dignissimos consectetur, voluptas
          vitae ipsa odit et, quas accusamus consequatur id accusantium ex
          voluptatibus eius suscipit.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
