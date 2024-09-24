import Menu from "./Menu";

export default function AddReview(){
    return(
        <>
         <div class="container-fluid">
        
        <div class="row align-items-center py-3 px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a href="/home" class="text-decoration-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold">
                        <span class="text-primary font-weight-bold border px-3 mr-1">Product Review</span></h1>
                </a>
            </div>
            
        </div>
    </div>
    
    
     
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Add Product for Review</span></h2>
        </div>
        <div class="row px-xl-5">
            <div class="col-lg-7 mb-5">
                <div class="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                         
                        <div class="control-group">
                            <input type="text" class="form-control"   placeholder="Subject"
                                required="required"   />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control"   placeholder="Category"
                                required="required"   />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea class="form-control" rows="6"  placeholder="Message"
                                required="required"
                             ></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                          <input type="file"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-5 mb-5">
                 
            </div>
        </div>
    </div>
   

        </>
    )
}