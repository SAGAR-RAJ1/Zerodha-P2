function Team() {
    return (  
        <div className="container mt-5 ">
        <div className="row mt-5 p-5 border-top">
        <h2 className="text-center fs-3">People</h2>
        </div>
        <div className="row p-5" style={{lineHeight:"1.8"}}>
       <div className="col mx-5 text-muted text-center">
<img src="Images/nithinKamath.jpg" alt="Founder" srcset="" style={{borderRadius:"100%", width:"60%"}}/>
<h5 className="mt-2">Nithin Kamath</h5>
<p className="text-muted">Founder, CEO</p>
 </div>
    
       <div className="col p-5 text-muted">
<p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>    
<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>       
<p>Playing basketball is his zen.</p>
<p>Connect on <a href="https://nithinkamath.me/"> Homepage</a>/ <a href="https://tradingqna.com/u/nithin/summary"> TradingQnA</a> / <a href="https://x.com/Nithin0dha"> TradingQnA</a></p>  
     </div>
        </div>
    </div>
     );
}

export default Team;