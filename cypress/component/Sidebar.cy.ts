import Sidebar from '../../src/lib/Sidebar.svelte'
import { mount } from 'cypress/svelte';

describe("Sidebar Component", () => {
	it("should match the homepage UI", () => {
	  mount(Sidebar);
	});
  });
  
