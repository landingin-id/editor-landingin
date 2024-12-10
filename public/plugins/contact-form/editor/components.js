Vvveb.ComponentsGroup['Plugins'] = ["contact-form/form"];

Vvveb.Components.extend("_base", "contact-form/form", {
	image: "icons/envelope.png",
	name: "Contact form",
	attributes: ["data-v-component-plugin-contact-form-form"],
	html: `<div data-v-component-plugin-contact-form-form="" data-v-save="true" data-v-email="true" data-v-sendto="" data-v-confirm-email="true" data-v-name="contact-form-appointment">

		<div class="notifications" data-v-notifications="">

			<div class="alert alert-danger d-flex alert-dismissable    " role="alert" data-v-if="this.errors">

				<div class="icon align-middle me-2">
					<i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
				</div>

				<div class="flex-grow-1 align-self-center text-small">
					<div data-v-notification-error="">
						<div data-v-notification-text="">Pesan gagal terkirim, pastikan data input benar</div>
					</div>				</div>


				
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="41" height="64" fill="#dc3545" class="btn-close"><defs><style>.eva-11{fill:#fff;opacity:0;}.eva-12{fill:inherit;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="close-square"><g id="close-square-2" data-name="close-square"><rect class="eva-11"></rect><path class="eva-12" d="M18,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3ZM14.71,13.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.29,1.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.3-1.29a1,1,0,0,1,1.42-1.42L12,10.59l1.29-1.3a1,1,0,0,1,1.42,1.42L13.41,12Z" fill="#dc3545" color="#dc3545"></path></g></g></g></svg></div>			<div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success="">

				<div class="icon align-middle me-2">
					<i class="align-middle la la-2x lh-1 la-check-circle"></i>
				</div>

				<div class="flex-grow-1 align-self-center align-middle" data-v-notification-text="">Pesan telah berhasil kami terima</div>

				
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="41" height="64" fill="#28a745" class="btn-close"><defs><style>.eva-11{fill:#fff;opacity:0;}.eva-12{fill:inherit;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="close-square"><g id="close-square-2" data-name="close-square"><rect class="eva-11"></rect><path class="eva-12" d="M18,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3ZM14.71,13.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.29,1.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.3-1.29a1,1,0,0,1,1.42-1.42L12,10.59l1.29-1.3a1,1,0,0,1,1.42,1.42L13.41,12Z" fill="#dc3545" color="#dc3545"></path></g></g></g></svg></div>		</div>

	<form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
	  <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty" value="">	

	  <div class="row">
		<div class="col">
		  <input type="text" class="form-control" placeholder="Nama Depan" name="firstname" required="" fdprocessedid="i5ya37" value="">
		</div>
		<div class="col">
		  <input type="text" class="form-control" placeholder="Nama Belakang" name="lastname" required="" fdprocessedid="gzioqf" value="">
		</div>
	  </div>

	  <div class="row mt-4">
		<div class="col">
		  <input type="email" class="form-control" placeholder="Masukan Nama Email" name="email" required="" fdprocessedid="iz9weh" value="">
		</div>
	  </div>

	  <div class="row mt-4">
		<div class="col">
		  <input type="text" class="form-control" placeholder="Subject" name="subject" required="" fdprocessedid="tgnihp" value="">
		</div>
	  </div>
	  <div class="row mt-4">
		<div class="col">
		  <textarea class="form-control" name="message" rows="3" placeholder="Tinggalkan Pesan" required=""></textarea>
		</div>
	  </div>

	 

	 <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form" value="">	
	 
	 <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty" value="">	
	 
	 	
	 

	  <div class="row mt-4">
		<div class="col">
		  <button type="submit" class="btn btn-primary" fdprocessedid="6wvwwu">
                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                    </span>
                    <span>Submitting</span> ... </span>

                  <span class="button-text">
                    <span>Submit</span>
                    <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                  </span>
                </button>
		</div>
	  </div>
	</form>
</div>`,

	properties: [{
		name: "Name",
		key: "name",
		htmlAttr: "data-v-name",
		inputtype: TextInput
	}, {
		name: "Save to database",
		key: "save",
		htmlAttr: "data-v-save",
		inputtype: CheckboxInput,
		col: 6,
		inline: true
	}, {
		name: "Send email to site admin",
		key: "email",
		htmlAttr: "data-v-email",
		inputtype: CheckboxInput,
		col: 6,
		inline: true
	}, {
		name: "Send to",
		key: "sendto",
		htmlAttr: "sendto",
		inputtype: TextInput
	}, {
		name: "",
		key: "sendto_warning",
		inline: false,
		col: 12,
		inputtype: NoticeInput,
		data: {
			type: 'info',
			title: '',
			text: 'If send to is empty then the configured contact email set in site settings will be used'
		}
	}, {
		name: "Send user confirmation email",
		key: "confirm-email",
		htmlAttr: "data-v-confirm-email",
		inputtype: CheckboxInput,
		col: 12,
		inline: true,
	}, {
		name: "",
		key: "confirm_warning",
		inline: false,
		col: 12,
		inputtype: NoticeInput,
		data: {
			type: 'info',
			title: '',
			text: 'The form must keep a field named email for user to receive a confirmation'
		}
	}]
});    
