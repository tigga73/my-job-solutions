// This is a custom implementation for a state manager in vue-ts
import { reactive, readonly } from "vue";

// an interface that represent the state
interface PostsState {
  foo: string;
}

class PostsStore {
  // the state is a private property
  #state: PostsState;

  constructor() {
    this.#state = reactive<PostsState>({
      foo: "foo",
    });
  }

  // a function to return the state
  getState() {
    return readonly(this.#state);
  }

  // a function to update the state
  updateState(foo: string) {
    this.#state.foo = foo;
  }
}

const store = new PostsStore();

// inject / provide
export function usePosts(): PostsStore {
  return store;
}
