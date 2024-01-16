
import "./Asosiy.css"

const Asosiy = () => {
  return (
    <div >
        <section className="asosiy_background ">
            <div className="container">
                <div className="Row asosiy_box">

                    <div className=" col ferst_box">
                        <div className="search_box">
                        <label htmlFor="name_card">Nomi bo`yicha qidirish:</label>
                        <input type="text" placeholder="Qidirish..." />
                        <button>Qidirish</button>
                        </div>
                        <div className="line"></div>

                        <div className="date_box">
                        <label htmlFor="name_card">Sana bo`yicha qidirish:</label>
                        <input type="date" placeholder="Qidirish..." />
                        <button>Qidirish</button>
                        <div className="line m-2"></div>
                        <button>Yangi post yaratish</button>
                        </div>
                    </div>

                    <div className="col second_box">

                       <div className="ferst_card">

                       <img src="../public/tafu.png" alt="" />

                        <div className="second_text">
                            <p>VOLUME 6 (5) / 2023</p>
                            <h4>Hack and document</h4>
                            <div className="card_line"></div>
                            <p className="m-2">CREATED: 09 YAN 2023 | PDF | Downloaded: 003 | Views: 123 </p>
                            <div className="card_line"></div>
                            <p>Direktor: Leeway</p>
                            <p>Bosh muharrir: Leeowener</p>
                            <p>Chiqarilgan sana: 23-dekabr, 2023-yil</p>
                        </div>

                       </div>
                       <div className="ferst_card">

                       <img src="../public/tafu.png" alt="" />

                        <div className="second_text">
                            <p>VOLUME 6 (5) / 2023</p>
                            <h4>Hack and document</h4>
                            <div className="card_line"></div>
                            <p className="m-2">CREATED: 09 YAN 2023 | PDF | Downloaded: 003 | Views: 123 </p>
                            <div className="card_line"></div>
                            <p>Direktor: Leeway</p>
                            <p>Bosh muharrir: Leeowener</p>
                            <p>Chiqarilgan sana: 23-dekabr, 2023-yil</p>
                        </div>
                        
                       </div> 
                       
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Asosiy