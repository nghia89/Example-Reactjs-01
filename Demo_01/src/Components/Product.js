import React, { Component } from 'react';

 class Product extends Component {

 constructor(props){
    super(props);
    this.state={
        products:[
            {
                Id:1,
                Name:'sp1',
                Price:3000,
                Image:'https://cdn.tgdd.vn/Products/Images/42/111107/samsung-galaxy-a7-2018-blue-600x600.jpg',
                status:true
            },
            {
                Id:2,
                Name:'sp3',
                Price:2000,
                Image:'https://cdn.tgdd.vn/Products/Images/42/188963/huawei-mate-20-pro-green-600x600.jpg',
                status:true
            },
            {
                Id:3,
                Name:'sp2',
                Price:4000,
                Image:'https://cdn.tgdd.vn/Products/Images/42/179673/huawei-nova-3i-den-chipu-1-400x460.png',
                status:false
            },
        ],
        IsActive:true
    }
}
  	onAddTocart(text){
		alert(text);
  	}
 onSate = () => {
    this.setState({
        IsActive : !this.state.IsActive
    });
}
  render() {
    let element=this.state.products.map((product,index)=>{
            let result='';
            if(product.status)
            {
            result=   (<tr key={product.Id}>
                        <td>{index}</td>
                       <td>{product.Name}</td>
                       <td>
                       <span className="label label-success">{product.Price}</span>
                       </td>
                   <td>
                    <button type="button" className="btn btn-default">
                    {product.status===true?"true":"false"}</button>
                   </td>
                       </tr>
                );
            }
           return result;
    });
      
    return (
       <div>      
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                   <table className="table table-hover">
                           <thead>
                               <tr>
                                   <th>stt</th>
                                   <th>Name</th>
                                   <th>price</th>
                               </tr>
                           </thead>
                           <tbody>
                                  {element}
                            </tbody>
                        
                    </table>  
                         <button type="button" className="btn btn-danger" onClick={this.onSate}>
                                   {this.state.IsActive===true?'true':'False'}</button>  
            </div>
            </div>
       </div>
    );
  }
}

export default Product;