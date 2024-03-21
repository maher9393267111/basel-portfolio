import React from 'react';
import UpdateProduct from '@/components/admin/product/updateProduct';
import { getDocuments,getDocument } from '@/functions/firebase/getData';
const EditSubPage = ({product}) => {
    return (
        <div>
            <UpdateProduct
            product={product}
          
            />
        </div>
    );
}


export default EditSubPage;



// serverside to fetch single catgory in serverside from firestore




EditSubPage.getInitialProps = async (context) => {
 
    // context.query.id ==> admin/category/edit/${context.query.id} in browser
        const product = await getDocument("articles", context.query.id);
        
     
       
        
    
    
     
        return {
            product: product,
           
        };
      };