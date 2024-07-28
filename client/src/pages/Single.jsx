import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.milwaukeemag.com/wp-content/uploads/2022/05/0522-414-CC-Swans-Li-e1652969275504-1024x722-1.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.milwaukeemag.com/wp-content/uploads/2022/05/0522-414-CC-Swans-Li-e1652969275504-1024x722-1.jpeg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago..</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Introduction to Javascript Arrow functions in windows 11 operating
          system
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed maiores
          fugiat blanditiis sunt pariatur! Odio explicabo ullam quae! Dolor ea
          saepe rem nemo. Perspiciatis quidem voluptate facere consequuntur.
          Repudiandae eos accusantium in, obcaecati sequi aut. Debitis, sit.
          Enim expedita nisi, ipsum in vitae ab perferendis unde iusto.
          Perspiciatis, rerum delectus dolor praesentium deleniti ad impedit
          repudiandae soluta eaque alias minus ipsum sed illo beatae totam
          dignissimos est perferendis cupiditate nisi esse architecto repellat
          magnam doloremque iure. Dignissimos nihil, suscipit id ea natus
          quisquam corporis deleniti cupiditate quas eos, non commodi veritatis
          optio saepe vitae fugit unde reprehenderit quos. Repellat autem rerum
          ullam, consectetur aut corporis error molestias, ut asperiores atque
          iusto ea vero beatae adipisci accusantium ducimus culpa. Autem quo
          quasi excepturi illo ea esse, voluptatum adipisci dignissimos officiis
          maxime similique aliquid, explicabo consequuntur quis accusamus vitae?
          Iste nisi atque ipsum ut minima alias, fugit aspernatur aliquid
          praesentium excepturi ad.
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            maiores fugiat blanditiis sunt pariatur! Odio explicabo ullam quae!
            Dolor ea saepe rem nemo. Perspiciatis quidem voluptate facere
            consequuntur. Repudiandae eos accusantium in, obcaecati sequi aut.
            Debitis, sit. Enim expedita nisi, ipsum in vitae ab perferendis unde
            iusto. Perspiciatis, rerum delectus dolor praesentium deleniti ad
            impedit repudiandae soluta eaque alias minus ipsum sed illo beatae
            totam dignissimos est perferendis cupiditate nisi esse architecto
            repellat magnam doloremque iure. Dignissimos nihil, suscipit id ea
            natus quisquam corporis deleniti cupiditate quas eos, non commodi
            veritatis optio saepe vitae fugit unde reprehenderit quos. Repellat
            autem rerum ullam, consectetur aut corporis error molestias, ut
            asperiores atque iusto ea vero beatae adipisci accusantium ducimus
            culpa. Autem quo quasi excepturi illo ea esse, voluptatum adipisci
            dignissimos officiis maxime similique aliquid, explicabo
            consequuntur quis accusamus vitae? Iste nisi atque ipsum ut minima
            alias, fugit aspernatur aliquid praesentium excepturi ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            maiores fugiat blanditiis sunt pariatur! Odio explicabo ullam quae!
            Dolor ea saepe rem nemo. Perspiciatis quidem voluptate facere
            consequuntur. Repudiandae eos accusantium in, obcaecati sequi aut.
            Debitis, sit. Enim expedita nisi, ipsum in vitae ab perferendis unde
            iusto. Perspiciatis, rerum delectus dolor praesentium deleniti ad
            impedit repudiandae soluta eaque alias minus ipsum sed illo beatae
            totam dignissimos est perferendis cupiditate nisi esse architecto
            repellat magnam doloremque iure. Dignissimos nihil, suscipit id ea
            natus quisquam corporis deleniti cupiditate quas eos, non commodi
            veritatis optio saepe vitae fugit unde reprehenderit quos. Repellat
            autem rerum ullam, consectetur aut corporis error molestias, ut
            asperiores atque iusto ea vero beatae adipisci accusantium ducimus
            culpa. Autem quo quasi excepturi illo ea esse, voluptatum adipisci
            dignissimos officiis maxime similique aliquid, explicabo
            consequuntur quis accusamus vitae? Iste nisi atque ipsum ut minima
            alias, fugit aspernatur aliquid praesentium excepturi ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            maiores fugiat blanditiis sunt pariatur! Odio explicabo ullam quae!
            Dolor ea saepe rem nemo. Perspiciatis quidem voluptate facere
            consequuntur. Repudiandae eos accusantium in, obcaecati sequi aut.
            Debitis, sit. Enim expedita nisi, ipsum in vitae ab perferendis unde
            iusto. Perspiciatis, rerum delectus dolor praesentium deleniti ad
            impedit repudiandae soluta eaque alias minus ipsum sed illo beatae
            totam dignissimos est perferendis cupiditate nisi esse architecto
            repellat magnam doloremque iure. Dignissimos nihil, suscipit id ea
            natus quisquam corporis deleniti cupiditate quas eos, non commodi
            veritatis optio saepe vitae fugit unde reprehenderit quos. Repellat
            autem rerum ullam, consectetur aut corporis error molestias, ut
            asperiores atque iusto ea vero beatae adipisci accusantium ducimus
            culpa. Autem quo quasi excepturi illo ea esse, voluptatum adipisci
            dignissimos officiis maxime similique aliquid, explicabo
            consequuntur quis accusamus vitae? Iste nisi atque ipsum ut minima
            alias, fugit aspernatur aliquid praesentium excepturi ad.
          </p>
        </p>
      </div>
      <div className="menu">M</div>
    </div>
  );
}
